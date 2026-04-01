import React, { useMemo, useState } from 'react';
import './PeopleICarePage.css';

type PersonStatus = 'Estável' | 'Atenção' | 'Crítico';

interface PersonSummary {
  id: string;
  name: string;
  age: number;
  relation: string;
  status: PersonStatus;
  alerts: number;
  nextAppointment: string | null;
}

const mockPeople: PersonSummary[] = [
  {
    id: '1',
    name: 'Ana Souza',
    age: 72,
    relation: 'Mãe',
    status: 'Atenção',
    alerts: 2,
    nextAppointment: '2026-04-03',
  },
  {
    id: '2',
    name: 'João Pereira',
    age: 64,
    relation: 'Pai',
    status: 'Estável',
    alerts: 0,
    nextAppointment: '2026-04-10',
  },
  {
    id: '3',
    name: 'Mariana Lima',
    age: 45,
    relation: 'Cuidada',
    status: 'Crítico',
    alerts: 3,
    nextAppointment: null,
  },
];

const formatDate = (date: string | null) =>
  date ? new Date(date).toLocaleDateString('pt-BR') : 'Sem agenda';

const PeopleICarePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'with-alert' | 'next-appointment'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'criticality' | 'nextAppointment' | 'recentlyUpdated'>('name');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [permissionDenied] = useState(false);
  const [canCreate] = useState(true);
  const [people] = useState<PersonSummary[]>(mockPeople);

  const filteredPeople = useMemo(() => {
    let result = people;

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter((person) =>
        person.name.toLowerCase().includes(term) ||
        person.relation.toLowerCase().includes(term)
      );
    }

    if (activeFilter === 'with-alert') {
      result = result.filter((person) => person.alerts > 0);
    }

    if (activeFilter === 'next-appointment') {
      result = result.filter((person) => Boolean(person.nextAppointment));
    }

    return [...result].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'criticality') return b.alerts - a.alerts;
      if (sortBy === 'nextAppointment') {
        return (a.nextAppointment ?? '').localeCompare(b.nextAppointment ?? '');
      }
      return 0;
    });
  }, [people, searchTerm, activeFilter, sortBy]);

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCreate = () => {
    if (!canCreate) return;
    console.log('Cadastrar nova pessoa');
  };

  const handleViewDetails = (id: string) => {
    console.log('Abrir detalhes da pessoa:', id);
  };

  if (permissionDenied) {
    return (
      <div className="people-i-care-page permission-blocked">
        <div className="state-panel">
          <h2>Acesso indisponível</h2>
          <p>O seu papel ativo não tem permissão para este módulo. Troque o papel ou volte ao dashboard.</p>
          <button type="button" className="primary-button">
            Voltar ao dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="people-i-care-page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Cuidado e acompanhamento</p>
          <h1>Pessoas que Eu Cuido</h1>
          <p className="page-description">
            Liste os pacientes vinculados, filtre por alertas, veja a próxima consulta e acesse detalhes.
          </p>
        </div>
        <button
          type="button"
          className="primary-button"
          onClick={handleCreate}
          disabled={!canCreate}
        >
          Cadastrar nova pessoa
        </button>
      </header>

      <section className="action-bar">
        <label className="search-box">
          <span className="visually-hidden">Buscar pessoa</span>
          <input
            type="search"
            placeholder="Buscar por nome ou vínculo"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>

        <div className="filter-group">
          <button
            type="button"
            className={activeFilter === 'all' ? 'filter-button active' : 'filter-button'}
            onClick={() => setActiveFilter('all')}
          >
            Todas
          </button>
          <button
            type="button"
            className={activeFilter === 'with-alert' ? 'filter-button active' : 'filter-button'}
            onClick={() => setActiveFilter('with-alert')}
          >
            Com alerta
          </button>
          <button
            type="button"
            className={activeFilter === 'next-appointment' ? 'filter-button active' : 'filter-button'}
            onClick={() => setActiveFilter('next-appointment')}
          >
            Próxima consulta
          </button>
        </div>

        <label className="select-box">
          <span className="visually-hidden">Ordenar por</span>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value as any)}>
            <option value="name">Nome</option>
            <option value="criticality">Criticidade</option>
            <option value="nextAppointment">Próxima consulta</option>
            <option value="recentlyUpdated">Atualização recente</option>
          </select>
        </label>
      </section>

      <section className="summary-cards">
        <div className="summary-card">
          <span>Total</span>
          <strong>{people.length}</strong>
        </div>
        <div className="summary-card">
          <span>Com alerta</span>
          <strong>{people.filter((person) => person.alerts > 0).length}</strong>
        </div>
        <div className="summary-card">
          <span>Com próxima consulta</span>
          <strong>{people.filter((person) => person.nextAppointment).length}</strong>
        </div>
      </section>

      {isLoading ? (
        <div className="state-panel">
          <p>Carregando pessoas...</p>
        </div>
      ) : hasError ? (
        <div className="state-panel">
          <h2>Ocorreu um erro</h2>
          <p>Não foi possível carregar as pessoas. Tente novamente.</p>
          <button type="button" className="secondary-button" onClick={handleRetry}>
            Tentar novamente
          </button>
        </div>
      ) : filteredPeople.length === 0 ? (
        <div className="state-panel">
          <h2>Nenhum resultado encontrado</h2>
          <p>Altere a busca ou remova filtros para exibir mais pessoas.</p>
          <button type="button" className="secondary-button" onClick={() => setSearchTerm('')}>
            Limpar busca
          </button>
        </div>
      ) : (
        <section className="people-list">
          {filteredPeople.map((person) => (
            <article key={person.id} className="person-card">
              <div className="person-card-header">
                <div>
                  <h2>{person.name}</h2>
                  <p>{person.relation} • {person.age} anos</p>
                </div>
                <span className={`status-badge status-${person.status.toLowerCase()}`}>
                  {person.status}
                </span>
              </div>

              <div className="person-card-body">
                <div className="person-meta">
                  <strong>{person.alerts}</strong>
                  <span>alertas ativos</span>
                </div>

                <div className="person-meta">
                  <strong>{formatDate(person.nextAppointment)}</strong>
                  <span>próxima consulta</span>
                </div>
              </div>

              <div className="person-card-footer">
                <button
                  type="button"
                  className="secondary-button detail-link"
                  onClick={() => handleViewDetails(person.id)}
                >
                  Ver detalhes
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
};

export default PeopleICarePage;
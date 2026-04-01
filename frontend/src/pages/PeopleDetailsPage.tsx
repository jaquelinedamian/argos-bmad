import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PeopleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 24, fontFamily: 'Inter, system-ui, sans-serif', color: '#1f2937' }}>
      <header style={{ marginBottom: 24 }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4b5563', fontSize: '0.75rem', marginBottom: 8 }}>
          Detalhes da pessoa
        </p>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Perfil da pessoa</h1>
      </header>

      <section style={{ padding: 24, borderRadius: 20, background: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(15, 23, 42, 0.05)' }}>
        <p style={{ margin: 0, color: '#4b5563' }}>
          Visualizando a pessoa com ID <strong>{id ?? 'desconhecido'}</strong>.
        </p>
        <p style={{ marginTop: 16, color: '#6b7280' }}>
          Aqui será exibido o perfil completo, estado geral, alertas ativos e próximas ações.
        </p>

        <Link
          to="/"
          style={{ display: 'inline-block', marginTop: 24, padding: '12px 18px', borderRadius: 12, background: '#f3f4f6', color: '#111827', textDecoration: 'none', fontWeight: 600 }}
        >
          Voltar para lista
        </Link>
      </section>
    </div>
  );
};

export default PeopleDetailsPage;

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Organizations
    await queryInterface.bulkInsert('Organizations', [
      {
        name: 'Abrigo Bom Viver',
        description: 'Apoio a famílias',
        contactEmail: 'contato@bomviver.org',
        location: JSON.stringify({ lat: -12.9711, lng: -38.5108 }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Feira de Adoção Feliz',
        description: 'Adoção de animais',
        contactEmail: 'contato@adocaopet.org',
        location: JSON.stringify({ lat: -12.9800, lng: -38.5000 }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    // Users (volunteers)
    const bcrypt = require('bcrypt');
    const pass1 = await bcrypt.hash('password123', 10);
    const pass2 = await bcrypt.hash('secret456', 10);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'João Voluntario',
        email: 'joao@example.com',
        password: pass1,
        role: 'volunteer',
        skills: JSON.stringify(['teaching','first-aid']),
        location: JSON.stringify({ lat: -12.9711, lng: -38.5108 }),
        availability: JSON.stringify({ weekdays: ['monday','wednesday'] }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria Voluntaria',
        email: 'maria@example.com',
        password: pass2,
        role: 'volunteer',
        skills: JSON.stringify(['animal-care','driving']),
        location: JSON.stringify({ lat: -12.9805, lng: -38.5040 }),
        availability: JSON.stringify({ weekdays: ['saturday'] }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    // Opportunities
    await queryInterface.bulkInsert('Opportunities', [
      {
        title: 'Aulas de Reforço',
        description: 'Ajudar com reforço escolar',
        skills: JSON.stringify(['teaching']),
        location: JSON.stringify({ lat: -12.9715, lng: -38.5100 }),
        schedule: JSON.stringify({ weekdays: ['monday'], time: '18:00' }),
        organizationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ajuda na Feira de Adoção',
        description: 'Organizar animais e interagir com público',
        skills: JSON.stringify(['animal-care']),
        location: JSON.stringify({ lat: -12.9802, lng: -38.4998 }),
        schedule: JSON.stringify({ weekdays: ['saturday'], time: '10:00' }),
        organizationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Transporte de Donativos',
        description: 'Dirigir caminhão de doações',
        skills: JSON.stringify(['driving']),
        location: JSON.stringify({ lat: -12.9750, lng: -38.5050 }),
        schedule: JSON.stringify({ weekdays: ['wednesday'], time: '09:00' }),
        organizationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Primeiros Socorros Básicos',
        description: 'Apoio com noções básicas de primeiros socorros',
        skills: JSON.stringify(['first-aid']),
        location: JSON.stringify({ lat: -12.9690, lng: -38.5120 }),
        schedule: JSON.stringify({ weekdays: ['monday'], time: '19:00' }),
        organizationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Applications', null, {});
    await queryInterface.bulkDelete('Opportunities', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Organizations', null, {});
  }
};

'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cast', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      drama_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      people_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })

    await queryInterface.addConstraint('cast', {
      type: 'foreign key',
      name: 'CAST__MOVIE_ID',
      fields: ['movie_id'],
      references: {
        table: 'movie',
        field: 'id'
      }
    })

    await queryInterface.addConstraint('cast', {
      type: 'foreign key',
      name: 'CAST__DRAMA_ID',
      fields: ['drama_id'],
      references: {
        table: 'drama',
        field: 'id'
      }
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cast')
  }
}

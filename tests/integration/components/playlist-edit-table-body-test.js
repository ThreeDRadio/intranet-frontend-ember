import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('playlist-edit-table-body', 'Integration | Component | playlist edit table body', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{playlist-edit-table-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#playlist-edit-table-body}}
      template block text
    {{/playlist-edit-table-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { test } from 'qunit';
import moduleForAcceptance from 'percy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | scientists');

test('visiting /scientists', function(assert) {
  visit('/scientists');
  percySnapshot('about page');

  andThen(function() {
    assert.equal(currentURL(), '/scientists');
  });
});

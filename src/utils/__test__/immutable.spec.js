import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import Immutable, { List, Map } from 'immutable';

chai.use(chaiImmutable);

describe('Immutable', () => {
  describe('A List', () => {

    it('is immutable', () => {
      const a = Map({
        names: List.of('chris', 'john')
      });

      const b = Map({
        ages: List.of(1, 2, 3),
        names: List.of('matt', 'joe')
      });

      const c = a.merge(b);

      expect(c).to.equal(Map({
        ages: List.of(1, 2, 3),
        names: List.of('matt', 'joe')
      }));
    });

    it('should update a state path', () => {
      const state = Map({
        a: Map({ b: Map({ c: 'hi!' })}),
        users: List.of(
          Map({
            name: 'Chris',
            can: List.of('add', 'remove')
          })
        )
      });

      const newState = state
        .updateIn(
          ['users'],
          users => users.push(Map({
            name: 'John',
            can: List.of('admin')
          })))
        .updateIn(
          ['a', 'b', 'c'],
          c => 'ho');

      const other = Map({
        a: Map({
          b: Map({
            c: Map({
              users: List.of(1, 2, 3)
            })
          })
        })
      });

      const other2 = other.updateIn(['a', 'b', 'c'], c => {
        return Map({
          users: c.get('users'),
          names: 'foo'
        });
      }).toJS().a.b.c;

      const users = Immutable.fromJS([{ name: 'chris'}, { name: 'paul'}, { name: 'sam'}]);

      const otherNames = users.map(user => {
        return user.set('name', 'foo');
      });

      const secondName = otherNames.set(2, Map({ name: 'hey!'}));

      const more = List.of(Map({ name: 'foo' }), Map({ name: 'bar' }));
      expect(more.includes(Map({ name: 'foo' }))).to.equal(true);

    });
  });
});

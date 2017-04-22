import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { combineEpics } from 'redux-observable';

export default function createRootEpic() {
  const epic$ = new BehaviorSubject(combineEpics());
  const rootEpic = (action$, store) =>
    epic$.mergeMap(epic => epic(action$, store));
  return { rootEpic, epic$ };
}

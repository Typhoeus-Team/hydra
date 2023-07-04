import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { quizSlice } from '.';

type Actions = typeof quizSlice.actions;

type ActionMap = {
  [K in keyof Actions]: (...args: Parameters<Actions[K]>) => void;
};

export function useDispatchQuizActions() {
  const dispatch = useAppDispatch();

  const actions = React.useMemo(() => {
    const actionsMap: Partial<ActionMap> = {};
    Object.keys(quizSlice.actions).forEach((actionKey) => {
      const action = actionKey as keyof Actions;
      actionsMap[action] = (payload: unknown) =>
        dispatch(quizSlice.actions[action](payload as never));
    });

    return actionsMap as ActionMap;
  }, [quizSlice.actions]);

  return actions;
}

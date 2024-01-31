
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getCounterValue } from '../model/selectors/counterSelectors';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useSelector(getCounterValue);

    const handleClick = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div>
            {count}
            <button type='button' onClick={handleClick}>Add 1</button>
        </div>
    );
};
import { useState } from 'react';
import * as C from './style';
import { Item } from '../../types/item';

type Props = {
    item: Item;
}

const upDateList = (elemento: Item) => {
    elemento.done ? elemento.done = false : elemento.done = true;
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);
    return (
        <C.Container done={isChecked}>
            <input type='checkbox'
                checked={isChecked}
                onChange={e => {
                    setIsChecked(e.target.checked)
                    upDateList(item)
                }} />
            <label>{item.name}</label>
        </C.Container>
    )
}
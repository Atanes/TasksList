import { useState, KeyboardEvent } from 'react'
import * as C from './style'

type Props = {
    onEnter: (taskName: string) => void;
}
export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }
    
    return (
        <C.ContainerArea>
            <div>📝</div>
            <input type="text"
                placeholder='Adicione um novo item...'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.ContainerArea>
    )

}
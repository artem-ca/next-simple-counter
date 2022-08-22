import { useState } from 'react'
import Header from '../components/Header'

function Button({ handleClick, sign }) {
    return (
        <button className='btn' onClick={handleClick}>
            {sign}
        </button>
    )
}

export default function Home() {
    const [count, setCount] = useState(0)

    function incrementor() {
        setCount(count + 1)
    }

    function decrementor() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <section>
            <Header />
            <div className='main'>
                <div className='counter'>
                    <h1 className='counter-header'>Counter</h1>
                    {count}

                    <br />

                    <Button handleClick={decrementor} sign='-' />
                    <Button handleClick={incrementor} sign='+' />

                    <p onClick={reset} className='btn-reset'>
                        Reset
                    </p>
                </div>
            </div>
        </section>
    )
}

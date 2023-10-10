'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./Form.module.css"

export default function Form() {

    const [form, setForm] = useState({
        ddd: '', telefone:'', mensagem: ''
    })


    const handleChange = (e:any) => {
        e.preventDefault()
    }

    const handleClick = (e:any) => {
        e.preventDefault()
        navigator.clipboard.writeText(`https://wa.me/55${form.ddd}${form.telefone}?text=${form.mensagem}%20`)
        setForm({...form, ddd: '', telefone: '', mensagem: ''})
    }

    useEffect(() => {handleChange})

    return (
        <div className={styles.content}>
            <form action="" className={styles.FormContent}>
                <div className={styles.formControl}>
                    <input type="text" placeholder="DDD" onChange={(e:any) => setForm({...form, ddd: e.target.value})}/>
                    <input type="text" placeholder="Telefone"  onChange={(e:any) => setForm({...form, telefone: e.target.value})}/>
                </div>
                <div className={styles.formControl}>
                    <input type="text" name="" id="" placeholder="Mensagem" onChange={(e:any) => setForm({...form, mensagem: e.target.value.replaceAll(' ', '%20')})}/>
                </div>
            </form>
            <div>
                <button onClick={handleClick} className={styles.buttonLink}>
                    Clique aqui para copiar o link
               </button>
            </div>
        </div>
    )
}
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image'

import { AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

import { api } from '../services/api';

import 'react-toastify/dist/ReactToastify.css';

import styles from '../styles/Home.module.scss'
import { OrderContext } from '../context/OrderContext';

type item = {
  id: number;
  name: string;
  description: string;
  valor: number;
};

type menuContent = {
  class: string;
  items: item[];
};

export default function Home() {
  const [ menu, setMenu ] = useState<menuContent[]>([]);
  const [ viewingOrder, setViewingOrder ] = useState<boolean>(false);
  const [ searchedItem, setSearchedItem ] = useState<string>("");

  const { items, addItem, removeItem } = useContext(OrderContext);

  useEffect(() => {
    api.get('/menu')
      .then(res => {
        setMenu(res.data as menuContent[]);
      });
  }, []);

  return (
    <div className={styles.container}>
      <ToastContainer 
        position='top-right'
        theme='dark'
        autoClose={3000}
      />
      <header>
        <Image src='/estacao.jpeg' width={60} height={60} />
      </header>
      <body>
        <div className={styles.searchInputField}>
          <div>
            <AiOutlineSearch />
            <input value={searchedItem} onChange={e => setSearchedItem(e.target.value)} type="text" placeholder='O que deseja?' />
          </div>
        </div>
        <div className={styles.menuItensField}>
          {menu.map((itemClass, index) => {
            return (
              <div className={styles.fieldClass} key={index}>
                <h2>
                  {itemClass.class}
                </h2>
                <div className={styles.classSeparator} />
                {itemClass.items.map(item => {
                  return item.name.toLocaleLowerCase().includes(searchedItem.toLocaleLowerCase()) && (
                    <div className={styles.fieldItem}>
                      <section>
                        <p>{item.name}</p>
                        <button onClick={() => addItem(item)}>
                          <span>+</span>{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </button>
                      </section>
                      <p>{item.description}</p>
                      <div className={styles.itemSeparator} />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </body>
      <main className={viewingOrder ? styles.viewingOrder : styles.notViewingOrder}>
        <h1>Pedido</h1>
        {items.map(item => {
          return item.name.toLocaleLowerCase().includes(searchedItem.toLocaleLowerCase()) && (
            <div className={styles.fieldItem}>
              <section>
                <p>{item.name}</p>
                <button onClick={() => removeItem(item.id)}>
                  <span>+</span>{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </button>
              </section>
              <p>{item.description}</p>
              <div className={styles.itemSeparator} />
            </div>
          )
        })}
      </main>
      <footer>
        <div className={styles.bottomOrder}>
          <div>
            <span>Valor</span>
            <p>{items.length > 0 ? items.map(i=>i.valor).reduce((a, b)=>a+b).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}</p>
          </div>
          <button onClick={() => setViewingOrder(o => !o)}>
            {viewingOrder ? 'Fechar' : 'Ver pedido'}
          </button>
        </div>
      </footer>
    </div>
  );
};

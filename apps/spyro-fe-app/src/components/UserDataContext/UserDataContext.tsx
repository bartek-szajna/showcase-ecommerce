import React, { useState, useEffect, createContext, SetStateAction, Dispatch } from 'react';

export interface nameType {
    name: string;
    setNameHandler: (name: string) => void;
}

export interface cartQuantityType {
  cartQuantity: number;
  setCartQuantityHandler: (quantity: number) => void;
}

export interface UserDataProviderProps {
  children: React.ReactNode;
}

export const NameContext = createContext<nameType>({name: "", setNameHandler: ()=> {}});
export const CartQuantityContext = createContext<cartQuantityType>({cartQuantity: 0, setCartQuantityHandler: () => {}});

const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [name, setName] = useState<string>('');
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setName(`${name}`);
    }
  }, []);

  useEffect(() => {
    const storageCart = localStorage.getItem('userCart');
    if (!storageCart) {
      setCartQuantity(0);
      return;
    }
    const storageCartObject = JSON.parse(storageCart);
    const productsNumber = storageCartObject.reduce(
      (sum: number, product: {count:number}) => sum + product.count,
      0
    );
    setCartQuantity(productsNumber);
  }, []);

  function setNameHandler(name: String){
    setName(`${name}`)
  }

  function setCartQuantityHandler(quantity: number){
    setCartQuantity(quantity)
  }

  return (
    <NameContext.Provider value={{name, setNameHandler}}>
      <CartQuantityContext.Provider
        value={{cartQuantity, setCartQuantityHandler}}
      >
        {children}
      </CartQuantityContext.Provider>
    </NameContext.Provider>
  );
}

export default UserDataProvider;

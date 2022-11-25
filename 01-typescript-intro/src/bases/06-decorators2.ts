const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            // Estraemos el valor de la propiedad memberName
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

export class Pokemon {

    constructor (
        public readonly id: number,
        public name: string
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    @Deprecated('Most use speak2 method instead')
    speak(){
        console.log(`${ this.name } ${ this.name }!`);
    }

    speak2(){
        console.log(`${ this.name } ${ this.name }!`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');
//Dara warning cuando se llame a charmander.speak() porque esta deprecated
charmander.speak()

// No dara warning porque no esta deprecated
charmander.speak2()
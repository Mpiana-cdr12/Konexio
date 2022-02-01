import React from "react";
// components
class App extends React.Component {
  constructor (){
  super();

  // 02 - Initialisation
    this.state = {
      activeTab: "add", //  valeur string add par défaut (c'est l'onglet actif, qui change quand on clique sur un autre)
      items:[], // items : valeur [] par défaut (ce sont les produits saisis)
    };
    // Importez aussi vos composants Add, List et Pay. En fonction de la valeur du state activeTabs, affichez le composant correspondant.
    this.selectAdd = thisselectedadd.blind(this)
    this.selectAdd = thisselectedadd.blind(this)
    this.selectadd = thisselectedadd.blind(this)
    this.add = this.add.blind(this)
    } 
    // 03 - Onglet
    selectAdd(e) { // Le (e) désigne "l'evenement" et (e) est un raccourcis pour events ; l'évènement déclencher
      console.log(e)
      this.setState({
        activeTab:"add" // j'importe le composant add en fonction de la valeur add
        // j'update le state de active add avec la valeur "add"
      });
    }
    
    selectList() {
      this.setState({
        activeTab :'list'// j'importe le composant list en fonction de la valeur du state activeLab
        // j'update le state de l'activeTab avec la valeur "list"
      })
    }
    selectPay(){
    this.setState({
      activeTab: 'pay'// j'importe le composant pay en fonction de la valeur du state activeLab
      // j'update le state de activLab avec la valeur de "pay"
    })
    }// 04 - Formulaire - Dans le composant Add.js créez le state avec les clés suivantes : 
add (name, price) {
  const obj = {
    name: name,
    price: price
  }
   const newList = this.state.items
   newList.push(obj)
   this.setState({
    items: newList
   })
}
   renderContent = () => {
     switch(this.state.activeTab) {
     case 'add':
       return <add addItem={this.add}></add>
     case 'list':
        return <List lisitems={(this.state.items)}></List>
      case 'pay':
        return <pay></pay>
     }
   }

  render() {
    return (
   <div className="App" >
  <Button onclick={this.selectAdd} isSelected={this.state.activeTabs === 'add' ? true : false}> Add </Button>
  <Button onClick={this.selectList} isSelected={this.state.activeTabs === 'list' ? true : false}> List </Button>
  <Button onClick={this.selectPay} isSelected={this.state.activeTabs === 'pay' ? true : false}> Pay </Button>
   {this.renderContent()}
   </div>
   );
  }
}
// 04 - Formulaire 
export default App;
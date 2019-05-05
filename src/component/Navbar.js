import React from "react"
import {Layout,Header,Navigation} from "react-mdl"

export default class NavBar extends React.Component {
        constructor(props) {
            super(props);
            this.state = { 
                signedin:"",
                
             }
        }
    
        componentDidMount(){
            this.setState({
                signedin:localStorage.getItem("jwt-token")
            })
        }

        Logout = (e) =>{
            localStorage.clear()
        }

   
      render() {
          return(
            <>
            {this.state.signedin?
            <div style={{height: '70px', position: 'relative'}}>
                <Layout >
                    <Header  title="RandomApp" style={{color: 'white'}}>
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/calculator">calculator</a>
                            <a href="/" onClick={this.Logout}>Logout</a>
                        </Navigation>
                    </Header>
                </Layout>
            </div>:
            <div style={{height: '70px', position: 'relative'}}>
                <Layout >
                    <Header  title="RandomApp" style={{color: 'white'}}>
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/login">Login</a>
                            <a href="/signup">Signup</a>
                        </Navigation>
                    </Header>
                </Layout>
            </div>}
            </>
            )
        }
    }
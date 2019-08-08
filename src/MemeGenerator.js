import React from 'react';

class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state ={
            topText : "",
            bottomText : "",
            randomImg:"https://i.imgflip.com/cv1y0.jpg",
            allmemes: [] 
        }

        this.handleChange = this.handleChange.bind(this);
        this.genRandomImg = this.genRandomImg.bind(this);
    }
    componentDidMount(){
        console.log('Hello');
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data;
            this.setState({
                allmemes : memes
            })
            
        })
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({ [name] : value})
    }

    genRandomImg(event){
        event.preventDefault();
        let randomNo = Math.floor(Math.random() * this.state.allmemes.length);
        let randomMeme = this.state.allmemes[randomNo].url;
        this.setState({randomImg : randomMeme})
        console.log(randomNo);
    }

    render(){
        return (
            <div>
                <form className="meme-form" onSubmit={this.genRandomImg}>
                    <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />    
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img className="meme-Img" src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;
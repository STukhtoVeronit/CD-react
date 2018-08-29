// function Hero(props){
//     let count = 0;
//
//     function handleClick() {
//         count += 1;
//         console.log(count);
//     }
//
//     return(
//         <div className = "container">
//             <div className = "count"> {count}</div>
//             <img src={props.imageUrl} onClick={handleClick}/>
//             <h3>{props.title}</h3>
//             <p>{props.subtitle}</p>
//         </div>
//     );
// }

var ImageCounter = function(props){

    return (
        <div className="image-counter">
            <div className = "count"> {props.count} </div>
            <img src={'img/' + props.imageUrl} onClick={props.onCount} />
        </div>
    );
};

let Hero = React.createClass({
    getInitialState: function(){
        return {
            count: 0
        };
    },
    handleClick: function(){
        this.setState({ count: this.state.count+1});
    },
    render: function () {
        return(
            <div className = "container">
                <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick}/>
                <h3>{this.props.title}</h3>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

let App = React.createClass({
   render: function () {
       return (
           <div>
               {this.props.heroes.map((hero) => {
                   return <Hero key = {hero.id}
                                title = {hero.title}
                                subtitle = {hero.subtitle}
                                imageUrl = {hero.imageUrl}/>
               })}
           </div>
       );
   }
});

let data = [
    {
        id: 1,
        title : "react",
        subtitle : "/\/\/\/\/\/",
        imageUrl : "react.png"
    },
    {
        id: 2,
        title : "angular",
        subtitle : "-_-_-_-_-_-_-",
        imageUrl : "angular.png"
    },
    {
        id: 3,
        title : "vue",
        subtitle : "~~~~~~~~~~~~",
        imageUrl : "vue.png"
    },
];

ReactDOM.render(<App heroes = {data}/>, document.getElementById('root'));
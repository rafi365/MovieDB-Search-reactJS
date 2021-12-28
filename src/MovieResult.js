import React from 'react';



function PrintTitles(props){
    const jdata = props.jdata;
    // const companies = jdata.companies;
    // const names = jdata.names;
    const titles = jdata.titles;
    const isdata = Boolean(titles);
    // console.log(jdata);
    if(isdata && titles.length !== 0){
        //TODO map needs key value(for react specs purposes)
        const listItems = titles.map((title) =>
        <div key={title.id}>
            <li>{title.title}</li>
            <img src={title.image} style={{height:"150px",width:"auto"}} alt={title.title}/>
            <br/>
            <input type="button" value="Show Movie Details" onClick={()=> props.handleClick(title.id)} />
        </div>
        );
        return(
            <div>
                <h1>Search Result</h1>
                <ul>{listItems}</ul>
            </div>
        );
    }else{
        return(
            <div>
                <h1>Search Result</h1>
                <p>No Results Found!</p>
            </div>
        );
    }
}

class MovieResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        // console.log(event);
        this.props.handledetails(event);
    }
  render() {
      if(this.props.loaded === true){
          return (
          //  <div>{JSON.stringify(this.props.result, null, 2)}</div>
            <PrintTitles jdata={this.props.result} handleClick={this.handleClick}/>
          );
    }else{
          return(
            <div>
                <h1>Search Result</h1>
                <p>Loading...</p>
            </div>
          );
      }
  }
}

export default MovieResult;

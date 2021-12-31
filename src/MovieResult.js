import React from 'react';



function PrintTitles(props){
    const jdata = props.jdata;
    // const companies = jdata.companies;
    // const names = jdata.names;
    const titles = jdata.titles;
    const isdata = Boolean(titles);
    if(isdata && titles.length !== 0){
        const listItems = titles.map((title) =>
        <div key={title.id} className='card pads'>
                <h2>{title.title}</h2>
            <img src={title.image} style={{height:"150px",width:"auto"}} alt={title.title}/>
            <div className='container'>
                <br/>
                <input className='button' type="button" value="Show Movie Details" onClick={()=> props.handleClick(title.id)} />
            </div>
        </div>
        );
        return(
            <fieldset>
                <legend><h1>Search Result</h1></legend>
                <div>{listItems}</div>
            </fieldset>
        );
    }else{
        return(
            <fieldset>
                <legend><h1>Search Result</h1></legend>
                <p>No Results Found!</p>
            </fieldset>
        );
    }
}

class MovieResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
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

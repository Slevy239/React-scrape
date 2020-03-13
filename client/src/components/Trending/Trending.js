import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'

class Trending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs: { data: [] }
        };
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/trending?&api_key=aUhPqNQX1V9W5wSNJ9J0FOaQdvwgHH7O&limit=5`)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((result) => {
                this.setState({
                    gifs: result,
                });
            })
    }

    render() {
        console.log(this.state.gifs)
        const listItems = this.state.gifs.data.map((item) =>
            <Card variant='outlined'>
                <CardContent>
                    <a href={item.url} target="new" key={item.id}>
                        <img src={item.images.original.url} alt='gif' />
                    </a>
                </CardContent>
            </Card>
        );
        return (
            <div className="pakageTrending">
                <h1>Top Trending</h1>
                <div className="trending">{listItems}</div>
            </div>
        )
    }
}

export default Trending;
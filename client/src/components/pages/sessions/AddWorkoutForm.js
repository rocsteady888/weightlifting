import React from 'react';
import TextField from '@material-ui/core/TextField';

class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      subCategory: '',
      reps: '',
      weight: '',
      rest: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.label]: e.target.value });
  }
  
  render() {
    return (
      <form>
        <TextField
          id="title"
          name="title"
          label="Title"
          value={this.state.title}
          onChange={this.onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="category"
          name="category"
          label="Category"
          value={this.state.category}
          onChange={this.onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="subCategory"
          name="subCategory"
          label="Sub Category"
          value={this.state.subCategory}
          onChange={this.onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Reps"
          value={this.state.reps}
          onChange={this.onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="weight"
          name="weight"
          label="Weight"
          value={this.state.weight}
          onChange={this.onChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="rest"
          name="rest"
          label="Rest"
          value={this.state.rest}
          onChange={this.onChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    )
  }
}

export default AddWorkoutForm;
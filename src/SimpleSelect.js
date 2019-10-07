import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    // name: "hai",
    rank: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="rank-simple">
          Rank
        </InputLabel>
        <Select
          value={values.rank}
          onChange={handleChange}
          inputProps={{
            name: "rank",
            id: "rank-simple"
          }}
        >
          <MenuItem value={"Black"}>Black</MenuItem>
          <MenuItem value={"Red"}>Red</MenuItem>
          <MenuItem value={"Green"}>Green</MenuItem>
          <MenuItem value={"Blue"}>Blue</MenuItem>
          <MenuItem value={"Orange-Purple"}>Orange/Purple</MenuItem>
          <MenuItem value={"Yellow"}>Yellow</MenuItem>
          <MenuItem value={"White"}>White</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Age
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: "age",
            id: "outlined-age-simple"
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
    </form>
  );
}

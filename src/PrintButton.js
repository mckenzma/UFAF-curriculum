import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import PrintIcon from "@material-ui/icons/Print";
import PrintDisabledIcon from "@material-ui/icons/PrintDisabled";
// import AddIcon from "@material-ui/icons/Add";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
    // position: "absolute",
    // top: theme.spacing(2),
    // right: theme.spacing(2)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function PrintButton() {
  const classes = useStyles();

  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <PrintIcon />
      </Fab>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <PrintDisabledIcon />
      </Fab>
    </div>
  );
}

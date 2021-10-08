import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  formControl: {
    // marginBottom: theme.spacing(1),
    width: "200px",
    backgroundColor: "white",
    borderRadius: "5px",
    margin:"10px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

type AnaisProps = {
    name: string;
    value: string;
    onChange: () => void;
}
function CountrySelector({ name, value, onChange }: AnaisProps) {
  const classes = useStyles();
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Ville</InputLabel>
        <Select
          required={true}
          native
          value={value}
          name={name}
          onChange={onChange}
          label="Pays"
          inputProps={{
            name: "country",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value="FRA">Paris</option>
          <option value="DEU">Marseille</option>
          <option value="AUT">Lyon</option>
          <option value="BEL">Montpellier</option>
          <option value="BGR">Toulouse</option>
          <option value="CYP">Nice</option>
          <option value="HRV">Nantes</option>
          <option value="DNK">Strasbourg</option>
          <option value="ESP">Bordeaux</option>
          <option value="EST">Lille</option>
          <option value="FIN">Reims</option>
          <option value="GRC">Toulon</option>
          <option value="HUN">Saint-Étienne</option>
          <option value="IRL">Le Havre</option>
          <option value="ITA">Grenoble</option>
          <option value="LVA">Dijon</option>
          <option value="LTU">Angers</option>
          <option value="LUX">Villeurbanne</option>
          <option value="MLT">Saint Denis</option>
          <option value="NLD">Nimes</option>
          <option value="PL">Clermont Ferrand</option>
          <option value="PT">Le Mans</option>
          <option value="RPT">Aix-en-Provence</option>
          <option value="RO">Brest</option>
          <option value="SVK">Tours</option>
          <option value="SVN">Amiens</option>
          <option value="SWE">Limoges</option>
        </Select>
      </FormControl>
    </div>
  );
}
export default CountrySelector;
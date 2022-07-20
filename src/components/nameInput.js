export default function NameInput(props) {

  const handleChange = e => {
    props.onNameChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>名稱</legend>
      <select onChange={handleChange}>
        <NameOption name="AWeirdDev" />
        <NameOption name="AWeirdScratcher" />
        <NameOption name="not a dev" />
        <NameOption name="(gun)" />
      </select>
    </fieldset>
  );
}

function NameOption({ name }) {
  return <option value={name}>{name}</option>
}

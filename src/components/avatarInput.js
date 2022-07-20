export default function AvatarInput(props) {

  const handleChange = e => {
    props.onAvatarChange(e.target.value);
  }

  return (
    <fieldset>
        <legend>頭像</legend>
        <select onChange={handleChange}>
          <option value="with_hat">有帽子</option>
          <option value="no_hat">沒有帽子</option>
        </select>
    </fieldset>
  );
}

import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Profile Page</h1>
      <h2>Welcome, {username}!</h2>
    </div>
  );
}

export default Profile;

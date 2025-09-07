const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f0f8ff' }}>
            <h2 style={{ color: 'blue', marginBottom: '5px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p>{props.bio}</p>
        </div>
    );
};

export default UserProfile;

import { getSession, signOut } from 'next-auth/react';

const profile = ({ session }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('handlesubmit', event.target.title);
    const data = {
      title: event.target.title.value,
      caption: event.target.caption.value,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DqNdGWnC16mCK-Pg2rPSVGCLIIX03z2aig&usqp=CAU',
      cloudinaryId: 'this an id',
      user: session.user.email,
    };

    const response = await fetch('http://localhost:3000/api/post', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json());

    console.log(response);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <div>
            <p>
              <strong>User Name</strong>: {session.user.name}{' '}
            </p>
            <p>
              <strong>Email</strong>: {session.user.email}{' '}
            </p>
            <button
              onClick={() => signOut()}
              className="col-3 btn btn-primary"
            >
              Logout
            </button>
          </div>
          <div className="mt-5">
            <h2>Add a post</h2>
            <form
              method="POST"
              action="/post/createPost"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label
                  htmlFor="title"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="caption"
                  className="form-label"
                >
                  Caption
                </label>
                <textarea
                  className="form-control"
                  id="caption"
                  name="caption"
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="imgUpload"
                  className="form-label"
                >
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="imageUpload"
                  name="file"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                {' '}
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-6">
          <ul className="row list-unstyled">
            {/* <% for(var i=0; i<posts.length; i++) {%>
          <li className="col-6 justify-content-between mt-5">
            <a href="/post/<%= posts[i]._id%>">
              <img className="img-fluid" src="<%= posts[i].image%>">
            </a>
          </li>
        <% } %> */}
          </ul>
          <div className="row justify-content-center mt-5">
            <a
              className="btn btn-primary"
              href="/feed"
            >
              Return to Feed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }

  return {
    props: { session },
  };
}

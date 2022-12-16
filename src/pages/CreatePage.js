import BlogForm from "../components/BlogForm";

const CreatePage = ({ addToast }) => {
  return (
    <div>
      <BlogForm addToast={addToast} editing={false} />
    </div>
  );
};

export default CreatePage;

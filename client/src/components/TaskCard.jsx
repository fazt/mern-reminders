import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function TaskCard({ _id, title, description, tags = [] }) {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-900 text-white"
      onClick={() => navigate(`/edit/${_id}`)}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-slate-400 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, i) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={i}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default TaskCard;

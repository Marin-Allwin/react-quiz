function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoj;
  if (percentage === 100) emoj = "🥇";
  if (percentage >= 80 && percentage < 100) emoj = "🎉";
  if (percentage >= 50 && percentage < 80) emoj = "🎉";
  if (percentage >= 0 && percentage < 50) emoj = "🎉";
  if (percentage === 0) emoj = "🤦🏼";

  return (
    <>
      <p className="result">
        <span>{emoj}</span> You scroed <strong>{points}</strong>out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)})
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;

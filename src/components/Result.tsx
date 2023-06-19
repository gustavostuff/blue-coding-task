const Result = (props: any) => {

  return (
    <>
      <div className="result">
        <img onClick={props.showModal} src={props.images?.downsized?.url} />
      </div>
    </>
  );
}

export default Result;
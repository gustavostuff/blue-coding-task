import Result from './Result';

const ResultsGrid = ({ results, showModal }: any) => {
  return (
    <div className="results-grid">
      {results.map((result: any) => (
        <Result showModal={() => showModal(result)} key={result.id} {...result} />
      ))}
    </div>
  );
}

export default ResultsGrid;

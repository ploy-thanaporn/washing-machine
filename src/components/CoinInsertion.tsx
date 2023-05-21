const CoinInsertion = ({
  onCoinInserted,
  isCoinInserted,
}: {
  onCoinInserted: () => void;
  isCoinInserted: boolean;
}) => {
  const handleCoinInsertion = () => {
    if (!isCoinInserted) {
      onCoinInserted();
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
        onClick={handleCoinInsertion}
        disabled={isCoinInserted}
      >
        {isCoinInserted ? "Coin Inserted" : "Insert Coin"}
      </button>
    </div>
  );
};

export default CoinInsertion;

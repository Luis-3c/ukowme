interface Props {
  closeModal: () => void;
  title?: string;
  content: string;
}

export default function ConfirmModal({ closeModal, title, content }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" bg-slate-700 p-6 rounded-lg">
        <h2>{content}</h2>
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Cancel
          </button>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-5"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

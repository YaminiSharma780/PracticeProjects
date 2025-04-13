import { createPortal } from "react-dom";

export default function Modal({ modal, setModal }) {
  return createPortal(
    <div
      onClick={() => {
        setModal(false);
      }}
      className="modal-container"
    >
      <div className="modal-content">
        <h1>This is Modal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          ducimus modi cum harum sit similique facilis hic ipsa atque non
          dolorem, autem aut corrupti aspernatur. Similique, libero. Sunt
          nesciunt tenetur exercitationem fugiat enim. Repellat quo laudantium
          placeat voluptates molestiae mollitia. Reprehenderit ratione ab,
          fugiat tempore amet esse odio quae quam, repellat sit eaque eum
          sapiente. Iste minima quibusdam autem debitis ad eveniet a,
          accusantium dignissimos obcaecati inventore, laboriosam voluptatibus
          itaque quaerat esse architecto nulla mollitia cupiditate consequatur
          excepturi porro sunt nobis, ipsam delectus libero. Eveniet quos
          consequuntur quis, recusandae possimus rem, beatae quasi delectus
          iusto magni obcaecati eum doloremque asperiores!
        </p>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

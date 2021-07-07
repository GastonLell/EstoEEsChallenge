import { Link } from "react-router-dom";

//context
import { StoreProjects } from "../context/ProjectsContext";

//hooks
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useState, useRef } from "react";

//componentes
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

//iconos para menu
import menuIcon from "../assets/menu.svg";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

const MenuCard = ({ id }) => {
  const [projects, addProject, editProject, deleteProject] = useContext(StoreProjects);

  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const deleteProjectAndRedirect = () => {
    deleteProject(id);
    history.push('/');
  }
  return (
    <Menu>
      <MenuButton as={Button} bg="#fff">
        <Image src={menuIcon} />
      </MenuButton>

      <MenuList>
        <Link to={`/edit/${id}`}>
          <MenuItem>
            <Image src={editIcon} mx={2} />
            Edit
          </MenuItem>
        </Link>

        <MenuItem onClick={() => setIsOpen(true)}>
          <Image src={deleteIcon} mx={2} />
          Delete
        </MenuItem>
      </MenuList>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Project
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button variant="estoEsOutline" ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button variant="estoEs" onClick={deleteProjectAndRedirect} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Menu>
  );
};
export default MenuCard;

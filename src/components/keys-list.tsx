import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

export const Keywords = () => {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30}/>
        Protecția mediului
        <ListIcon as={MdCheckCircle} color='green.500'marginLeft={30}/>
        Eco-friendly
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30}/>
        Reciclare
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30}/>
        Sustenabilitate
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30}/>
        Soluții sustenabile
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30}/>
        Conservarea resurselor
      </ListItem>
    </List>
  )
}
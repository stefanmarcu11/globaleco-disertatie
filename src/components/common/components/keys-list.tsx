import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

export const Keywords = () => {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30} />
        Environmental protection
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30} />
        Eco-friendly
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30} />
        Recycling
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30} />
        Sustainability
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30} />
        Sustainable solutions
        <ListIcon as={MdCheckCircle} color='green.500' marginLeft={30} />
        Resource conservation
      </ListItem>
    </List>
  )
}
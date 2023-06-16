import { useState, useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Box,
    Flex,
    Input,
    Stack,
    FormControl,
    FormLabel,
    Button,
} from "@chakra-ui/react";

type Student = {
    no: number;
    name: string;
    section: string;
    roll: string;
};

const StudentList = () => {
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [section, setSection] = useState("");
    const [students, setStudents] = useState<Student[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!(name && rollNo && section)) {
            console.log("All fields are required");
            return;
        }

        const newStudent: Student = {
            no: students.length + 1,
            name: name,
            roll: rollNo,
            section: section,
        };

        setStudents([...students, newStudent]);
        setName("");
        setRollNo("");
        setSection("");
    };

    useEffect(() => {
        console.log("Student Data Coming");
    }, []);

    return (
        <Box p={4}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <Flex alignItems="center">
                        <FormControl id="name" isRequired flex="2" mr="2">
                            <FormLabel>Name</FormLabel>
                            <Input
                                type="text"
                                color="yellow"
                                value={name}
                                placeholder="Enter your Name..."
                                onChange={(event) => setName(event.target.value)}
                            />
                        </FormControl>
                        <FormControl id="roll" isRequired flex="2" mr="2">
                            <FormLabel>Roll No.</FormLabel>
                            <Input
                                type="text"
                                color="yellow"
                                placeholder="Enter your Roll Number..."
                                value={rollNo}
                                onChange={(event) => setRollNo(event.target.value)}
                            />
                        </FormControl>
                        <FormControl id="section" isRequired flex="2">
                            <FormLabel>Section</FormLabel>
                            <Input
                                type="text"
                                color="yellow"
                                placeholder="Enter your Section..."
                                value={section}
                                onChange={(event) => setSection(event.target.value)}
                            />
                        </FormControl>
                        <Button type="submit" colorScheme="blue" size="md" mx="5" mt="5">
                            Add
                        </Button>
                    </Flex>
                </Stack>
            </form>


            <Table variant="simple" mt={4}>
                <TableCaption color="White">Students</TableCaption>
                <Thead>
                    <Tr>
                        <Th color="yellow">No.</Th>
                        <Th color="yellow">Name</Th>
                        <Th color="yellow">Roll No.</Th>
                        <Th color="yellow">Section</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {students.map((student) => (
                        <Tr key={student.no}>
                            <Td>{student.no}</Td>
                            <Td>{student.name}</Td>
                            <Td>{student.roll}</Td>
                            <Td>{student.section}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default StudentList;

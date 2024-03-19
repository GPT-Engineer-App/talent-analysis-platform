import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Textarea, Button, Image, Progress, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { FaFileUpload, FaSearch } from "react-icons/fa";

const Index = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [candidateProfiles, setCandidateProfiles] = useState([]);
  const [analysisResults, setAnalysisResults] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleCandidateProfileUpload = (e) => {
    // Simulating file upload
    const uploadedProfiles = [
      { name: "John Doe", profile: "Experienced software engineer with expertise in React and Node.js." },
      { name: "Jane Smith", profile: "Frontend developer skilled in HTML, CSS, and JavaScript." },
      { name: "Mike Johnson", profile: "Full-stack developer with knowledge of Python and Django." },
    ];
    setCandidateProfiles(uploadedProfiles);
  };

  const analyzeProfiles = () => {
    setIsAnalyzing(true);
    // Simulating analysis process
    setTimeout(() => {
      const results = candidateProfiles.map((candidate) => ({
        name: candidate.name,
        scores: {
          "Technical Skills": Math.random() * 100,
          "Relevant Experience": Math.random() * 100,
          "Communication Skills": Math.random() * 100,
          "Problem Solving": Math.random() * 100,
        },
      }));
      setAnalysisResults(results);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Candidate Profile Analysis
        </Heading>
        <Box>
          <Image src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYW5kaWRhdGUlMjBwcm9maWxlJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzEwODQ4NTI0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Candidate Profile Analysis" />
        </Box>
        <VStack align="stretch" spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            Job Description
          </Text>
          <Textarea value={jobDescription} onChange={handleJobDescriptionChange} placeholder="Enter the job description" rows={6} />
        </VStack>
        <HStack justify="space-between">
          <Button leftIcon={<FaFileUpload />} onClick={handleCandidateProfileUpload}>
            Upload Candidate Profiles
          </Button>
          <Button colorScheme="blue" leftIcon={<FaSearch />} onClick={analyzeProfiles} isLoading={isAnalyzing} loadingText="Analyzing...">
            Analyze Profiles
          </Button>
        </HStack>
        {isAnalyzing && <Progress size="xs" isIndeterminate />}
        {analysisResults.length > 0 && (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Candidate</Th>
                  <Th>Technical Skills</Th>
                  <Th>Relevant Experience</Th>
                  <Th>Communication Skills</Th>
                  <Th>Problem Solving</Th>
                </Tr>
              </Thead>
              <Tbody>
                {analysisResults.map((result) => (
                  <Tr key={result.name}>
                    <Td>{result.name}</Td>
                    <Td>{result.scores["Technical Skills"].toFixed(2)}%</Td>
                    <Td>{result.scores["Relevant Experience"].toFixed(2)}%</Td>
                    <Td>{result.scores["Communication Skills"].toFixed(2)}%</Td>
                    <Td>{result.scores["Problem Solving"].toFixed(2)}%</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </VStack>
    </Box>
  );
};

export default Index;

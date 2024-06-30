"use client";

import { api } from "@/app/utils/api";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export function Trailer({ id }: { id: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [videoKey, setVideoKey] = useState("");
  const [loading, setLoading] = useState(false);
  async function getVideo(id: string) {
    try {
      setLoading(true);
      const { data } = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/videos`
      );
      setVideoKey(data.results[data.results.length - 1].key);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
      <p
        className="flex items-center gap-2 hover:text-[#cecece] cursor-pointer"
        onClick={() => {
          getVideo(id), onOpen();
        }}
      >
        <FaPlay />
        Reproduzir Trailer
      </p>
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0} backgroundColor={"black"}>
            {loading ? (
              <div className="w-full lg:w-[900px] h-[600px] flex justify-center items-center">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="red.500"
                  size="xl"
                />
              </div>
            ) : (
              <iframe
                className="w-full lg:w-[900px] h-[600px]"
                src={`https://www.youtube.com/embed/${videoKey}`}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

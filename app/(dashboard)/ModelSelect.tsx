"use client";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const ModelSelect = () => {
  const [selectedModel, setSelectedModel] = useState("ai_chat_2");

  return (
    <Select
      defaultValue="ai_chat_2"
      value={selectedModel}
      onValueChange={(value) => {
        setSelectedModel(value);
      }}
    >
      <SelectTrigger className="h-[42px] w-[195px] bg-[#091901] border-[0.6px] border-[#343B4F] text-[#AEB9E1]">
        <SelectValue placeholder="AI Chat 2.0" />
      </SelectTrigger>
      <SelectContent className="w-[300px] md:w-[422px] bg-[#040D00] text-white rounded-none border-[0.6px] border-[#343B4F] gap-10">
        <SelectItem data-type="model" value="ai_chat">
          <Box className="text-left">
            <Box>AI Chat</Box>
            <Box>Great for everyday task</Box>
          </Box>
        </SelectItem>
        <SelectItem data-type="model" value="ai_chat_2" className="my-4">
          <Box>
            <Box>AI Chat 2.0</Box>
          </Box>
        </SelectItem>
        <SelectItem
          data-type="model"
          value="ai_chat_plus"
          disabled
          className="flex justify-between w-full"
        >
          <Box className="text-left">
            <Box>AI Chat Plus</Box>
            <Box>Great for everyday task</Box>
          </Box>
          <Box className="absolute right-2">
            <Button variant={"outline"} size="sm" className="rounded-full h-9">
              Upgrade
            </Button>
          </Box>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

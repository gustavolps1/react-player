package com.reactplayer.api.controller;

import com.reactplayer.api.model.FileModel;
import com.reactplayer.api.service.FileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin("*")
@RestController
public class FileController {


    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<FileModel>> get(){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(fileService.getFileListFromDir());
    }

}

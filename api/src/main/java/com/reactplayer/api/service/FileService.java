package com.reactplayer.api.service;

import com.reactplayer.api.model.FileModel;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FileService {


    @Value("${app.dir-files}")
    private String dir;

    public List<FileModel> getFileListFromDir(){
        FileSystemResource fileSystemResource = new FileSystemResource(dir);
        String[] files = fileSystemResource.getFile().list();

        assert files != null;
        return Arrays.stream(files).map(fileName -> FileModel
                        .builder()
                        .name(fileName)
                        .build())
                .collect(Collectors.toList());
    }
}

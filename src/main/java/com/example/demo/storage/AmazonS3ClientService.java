package com.example.demo.storage;

import org.springframework.web.multipart.MultipartFile;

public interface AmazonS3ClientService
{
    void uploadFileToS3Bucket(MultipartFile multipartFile, String filename, boolean enablePublicReadAccess);

    void deleteFileFromS3Bucket(String fileName);
}
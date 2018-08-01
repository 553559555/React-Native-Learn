//
//  Log.m
//  Log
//
//  Created by 王壮 on 2017/6/23.
//  Copyright © 2017年 Arther. All rights reserved.
//

#import "Log.h"

//设置打印级别
#define CURRENTENVIRONMENT 6

typedef enum : NSUInteger {
    LEVEL_OFF,          //关闭打印
    LEVEL_ERROR,        //打印错误  一般发布时使用
    LEVEL_WARN,         //打印警告
    LEVEL_INFO,         //打印信息
    LEVEL_DEBUG,        //开发环境
    LEVEL_VERBOSE,      //
    LEVEL_ALL           //打印全部
} Level;

@implementation Log

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(v:(NSString *)content) {
    
    if (CURRENTENVIRONMENT < LEVEL_VERBOSE) {
        return;
    }
    
    NSLog(@"%@", content);
    
}


RCT_EXPORT_METHOD(d:(NSString *)content) {
    
    if (CURRENTENVIRONMENT < LEVEL_DEBUG) {
        return;
    }
    
    NSLog(@"%@", content);
    
}

RCT_EXPORT_METHOD(i:(NSString *)content) {
    
    if (CURRENTENVIRONMENT < LEVEL_INFO) {
        return;
    }
    
    NSLog(@"%@", content);
    
}

RCT_EXPORT_METHOD(w:(NSString *)content) {
    
    if (CURRENTENVIRONMENT < LEVEL_WARN) {
        return;
    }
    
    NSLog(@"%@", content);
    
}

RCT_EXPORT_METHOD(e:(NSString *)content) {
    
    if (CURRENTENVIRONMENT < LEVEL_ERROR) {
        return;
    }
    
    NSLog(@"%@", content);
    
}

@end


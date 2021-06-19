﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210615105957_PaperSubjectRef")]
    partial class PaperSubjectRef
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.5");

            modelBuilder.Entity("API.Entities.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("Role")
                        .HasColumnType("TEXT");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("API.Entities.Exam", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Mark")
                        .HasColumnType("INTEGER");

                    b.Property<int>("QuestionPaper")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Student")
                        .HasColumnType("INTEGER");

                    b.Property<int>("evaluated")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Exams");
                });

            modelBuilder.Entity("API.Entities.Paper", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Duration")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("PassScore")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SubjId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("eval")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Papers");
                });

            modelBuilder.Entity("API.Entities.Question", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Answer")
                        .HasColumnType("TEXT");

                    b.Property<string>("RanAns1")
                        .HasColumnType("TEXT");

                    b.Property<string>("RanAns2")
                        .HasColumnType("TEXT");

                    b.Property<string>("RanAns3")
                        .HasColumnType("TEXT");

                    b.Property<string>("_text")
                        .HasColumnType("TEXT");

                    b.Property<int>("subjId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("API.Entities.QuestionPaper", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Duration")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("PassScore")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("QuestionPapers");
                });

            modelBuilder.Entity("API.Entities.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Subjects");
                });
#pragma warning restore 612, 618
        }
    }
}
